import {BuilderHUD} from './modules/BuilderHUD'

let scene = new Entity()
engine.addEntity(scene)

let tieFighter = new Entity()
let tieFighterShape = new GLTFShape("models/tie_fighter.glb")
let tieFighterTransform = new Transform({
    position: new Vector3(5, 2, 4),
    rotation: Quaternion.Euler(165.262, -10.678, 161.705),
    scale: new Vector3(1, 1, 1)
})

tieFighter.addComponent(tieFighterShape)
tieFighter.addComponent(tieFighterTransform)
tieFighter.setParent(scene)
engine.addEntity(tieFighter)

let xWingFighter = new Entity()
let xWingFighterShape = new GLTFShape("models/x_wind_fighter.glb")
let xWingFighterTransform = new Transform({
    position: new Vector3(12, 2, 12),
    rotation: Quaternion.Euler(-168.304, -64.536, -179.413),
    scale: new Vector3(1, 1, 1)
})

xWingFighter.addComponent(xWingFighterShape)
xWingFighter.addComponent(xWingFighterTransform)
xWingFighter.setParent(scene)
engine.addEntity(xWingFighter)

// XXX BuilderHUD
let hud:BuilderHUD =  new BuilderHUD()
hud.attachToEntity(tieFighter)
hud.attachToEntity(xWingFighter)
hud.setDefaultParent(scene)
