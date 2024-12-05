// priority 93
GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:mica_vein", vein => {
        vein.layeredVeinGenerator(generator => generator
            .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
                .layer(l => l.weight(3).mat(GTMaterials.Kyanite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Mica).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pollucite).size(1, 1))
                .build()))
    })
    event.modify("gtceu:apatite_vein", vein => {
        vein.layeredVeinGenerator(generator => generator
            .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
                .layer(l => l.weight(3).mat(GTMaterials.Apatite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.TricalciumPhosphate).size(1, 1))
                .build()))
    })
    event.add("kubejs:quartzite_vein_aw", vein => {
        vein.weight(20)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("kubejs:ancient_world", "kubejs:ganymede")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Quartzite).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Barite).size(2, 4))
                .layer(l => l.weight(4).mat(GTMaterials.NetherQuartz).size(2, 4))
            )
        )
    })
    event.add("kubejs:sulfur_vein_aw", vein => {
        vein.weight(100)
        vein.clusterSize(30)
        vein.density(0.2)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("kubejs:ancient_world", "kubejs:ganymede", "ad_astra:glacio")
        vein.heightRangeUniform(0, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Sulfur).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Sphalerite).size(1, 1))
            )
        )
    })
    event.add("kubejs:stibnite_vein_aw", vein => {
        vein.weight(70)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("kubejs:ancient_world", "kubejs:pluto")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Copper).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Stibnite).size(1, 3))
            )
        )
    })
    event.add("kubejs:topaz_vein_aw", vein => {
        vein.weight(70)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("kubejs:ancient_world", "kubejs:ganymede", "kubejs:barnarda")
        vein.heightRangeUniform(20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.BlueTopaz).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Topaz).size(1, 3))
            )
        )
    })
    event.add("kubejs:certus_quartz_vein_aw", vein => {
        vein.weight(40)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("kubejs:ancient_world", "kubejs:ceres", "kubejs:barnarda")
        vein.heightRangeUniform(10, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Quartzite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.CertusQuartz).size(1, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Barite).size(1, 1))
            )
        )
    })
    event.add("kubejs:beryllium_vein_aw", vein => {
        vein.weight(30)
        vein.clusterSize(30)
        vein.density(0.75)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("kubejs:ancient_world")
        vein.heightRangeUniform(-20, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Beryllium).size(3, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Emerald).size(2, 4))
            )
        )
    })
    event.add("kubejs:molybdenum_vein_aw", vein => {
        vein.weight(10)
        vein.clusterSize(30)
        vein.density(0.75)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("kubejs:ancient_world", "kubejs:ceres", "ad_astra:glacio")
        vein.heightRangeUniform(20, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Wulfenite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Powellite).size(1, 1))
            )
        )
    })
    event.add("kubejs:saltpeter_vein_aw", vein => {
        vein.weight(10)
        vein.clusterSize(40)
        vein.density(0.75)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("kubejs:ancient_world", "kubejs:titan", "ad_astra:glacio")
        vein.heightRangeUniform(5, 45)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Saltpeter).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Diatomite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Electrotine).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Alunite).size(1, 1))
            )
        )
    })

    event.add("kubejs:bauxite_vein_ad", vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("ad_astra:moon", "kubejs:ganymede")
        vein.heightRangeUniform(10, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Bauxite).size(2, 4))
                .layer(l => l.weight(4).mat(GTMaterials.Ilmenite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
            )
        )
    })
    event.add("kubejs:monazite_vein_ad", vein => {
        vein.weight(30)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("ad_astra:moon", "kubejs:ceres", "ad_astra:glacio")
        vein.heightRangeUniform(20, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Bastnasite).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Monazite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Neodymium).size(1, 1))
            )
        )
    })
    event.add("kubejs:pitchblende_vein_ad", vein => {
        vein.weight(10)
        vein.clusterSize(40)
        vein.density(1)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("ad_astra:moon", "kubejs:titan", "kubejs:pluto")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Pitchblende).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Uraninite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Thorium).size(1, 1))
            )
        )
    })
    event.add("kubejs:plutonium_vein_ad", vein => {
        vein.weight(10)
        vein.clusterSize(40)
        vein.density(1)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("ad_astra:moon", "kubejs:pluto", "kubejs:barnarda")
        vein.heightRangeUniform(30, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Plutonium239).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Uraninite).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Thorium).size(1, 1))
            )
        )
    })
    event.add("kubejs:apatite_vein_ad", vein => {
        vein.weight(30)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("ad_astra:mars", "kubejs:enceladus", "kubejs:barnarda")
        vein.heightRangeUniform(10, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Apatite).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.TricalciumPhosphate).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pyrochlore).size(1, 1))
            )
        )
    })
    event.add("kubejs:sheldonite_vein_ad", vein => {
        vein.weight(10)
        vein.clusterSize(30)
        vein.density(0.2)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("ad_astra:mars", "kubejs:enceladus", "ad_astra:glacio")
        vein.heightRangeUniform(5, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bornite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Cooperite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Platinum).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Palladium).size(1, 1))
            )
        )
    })
    event.add("kubejs:scheelite_vein_ad", vein => {
        vein.weight(20)
        vein.clusterSize(30)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("ad_astra:mars", "ad_astra:glacio", "kubejs:barnarda")
        vein.heightRangeUniform(20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Scheelite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Tungstate).size(1, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Lithium).size(1, 1))
            )
        )
    })
    event.add("kubejs:olivine_vein_ad", vein => {
        vein.weight(20)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("ad_astra:venus", "kubejs:io", "kubejs:enceladus")
        vein.heightRangeUniform(-20, 10)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Bentonite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Magnetite).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Olivine).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.GlauconiteSand).size(1, 1))
            )
        )
    })
    event.add("kubejs:desh_vein_ad", vein => {
        vein.weight(20)
        vein.clusterSize(30)
        vein.density(0.2)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("ad_astra:venus", "kubejs:titan")
        vein.heightRangeUniform(10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.get("desh")).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Magnesite).size(1, 1))
            )
        )
    })
    event.add("kubejs:sulfur_vein_ad", vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("ad_astra:venus", "kubejs:io", "kubejs:barnarda")
        vein.heightRangeUniform(10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Sulfur).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Pyrite).size(1, 2))
                .layer(l => l.weight(3).mat(GTMaterials.Sphalerite).size(1, 1))
            )
        )
    })
    event.add("kubejs:calorite_vein_ad", vein => {
        vein.weight(20)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("ad_astra:mercury", "ad_astra:glacio")
        vein.heightRangeUniform(10, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.get("calorite")).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Cobalt).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Magnesite).size(1, 1))
            )
        )
    })
    event.add("kubejs:nickel_vein_ad", vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("ad_astra:mercury", "kubejs:pluto")
        vein.heightRangeUniform(-10, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Garnierite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Cobaltite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
            )
        )
    })
    event.add("kubejs:ostrum_vein_ad", vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("kubejs:ceres", "ad_astra:glacio")
        vein.heightRangeUniform(0, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.get("ostrum")).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 4))
            )
        )
    })
    event.add("kubejs:naquadah_vein_ad", vein => {
        vein.weight(20)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("kubejs:io", "kubejs:pluto", "kubejs:barnarda")
        vein.heightRangeUniform(-10, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                
                .layer(l => l.weight(2).mat(GTMaterials.Naquadah).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Plutonium239).size(2, 4))
            )
        )
    })
    event.add("kubejs:zircon_vein_ad", vein => {
        vein.weight(20)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("kubejs:ganymede", "kubejs:titan")
        vein.heightRangeUniform(0, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.get("zircon")).size(1, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Grossular).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Pyrolusite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Tantalite).size(1, 2))
            )
        )
    })
    event.add("kubejs:celestine_vein_ad", vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("all_layer")
        vein.dimensions("kubejs:io", "ad_astra:glacio")
        vein.heightRangeUniform(10, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.get("celestine")).size(1, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Cooperite).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Trona).size(2, 4))
            )
        )
    })
})