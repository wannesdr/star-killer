controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    meow = sprites.createProjectileFromSprite(assets.image`die bullet`, knor, 200, 0)
    animation.runImageAnimation(
    knor,
    assets.animation`piep`,
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let dogs: Sprite = null
let meow: Sprite = null
let knor: Sprite = null
knor = sprites.create(assets.image`kkkkknnnoooorrrrr`, SpriteKind.Player)
controller.moveSprite(knor, 200, 200)
knor.setStayInScreen(true)
info.setLife(3)
tiles.setTilemap(tilemap`map go brrrrrrrrrrr`)
game.onUpdateInterval(1000, function () {
    dogs = sprites.create(assets.image`waf`, SpriteKind.Enemy)
    dogs.setPosition(160, randint(5, 150))
    dogs.setVelocity(-50, 0)
    dogs.setFlag(SpriteFlag.AutoDestroy, true)
})
