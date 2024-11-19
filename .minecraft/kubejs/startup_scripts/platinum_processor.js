GTCEuStartupEvents.registry('gtceu:recipe_type', event =>{
    event.create('platinum_processor')
      .category('platinum_processor')
      .setEUIO('in')
      .setMaxIOSize(2, 6, 1, 0)
      .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
      .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
      .setSound(GTSoundEntries.CHEMICAL)
  })  
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("platinum_processor", "multiblock", (holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeType("platinum_processor")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("b   b", "bbbbb", "b   b", "bbbbb", "b   b")
                .aisle("bbbbb", "bcccb", "bdddb", "bcccb", "bbbbb")
                .aisle("b   b", "bdddb", "bcccb", "bdddb", "b   b")
                .aisle("bbbbb", "bcccb", "bdddb", "bcccb", "bbbbb")
                .aisle("b   b", "abbbb", "b   b", "bbbbb", "b   b")
                .where("a", Predicates.controller(Predicates.blocks(definition.get())))
                .where("b", Predicates.blocks("gtceu:inert_machine_casing")
                    .setMinGlobalLimited(60)
                    .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
                .where("c", Predicates.heatingCoils())
                .where("d", Predicates.blocks("gtceu:ptfe_pipe_casing"))
                .where(" ", Predicates.any())
                .build())
            .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_inert_ptfe", "gtceu:block/machines/chemical_reactor")
})