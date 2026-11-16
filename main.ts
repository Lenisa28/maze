controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . e 8 8 e e . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 8 a a a a a 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 5 a a a a a 5 . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . . . e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . e e e 8 e . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 8 a a a a a 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 5 a a a a a 5 . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e 5 e e e e . . . . 
        . . . . . . . e e e e e . . . . 
        . . . . . . 5 5 5 e e e . . . . 
        . . . . . . 5 5 5 e e e . . . . 
        . . . . . . . 8 8 8 e . . . . . 
        . . . . . . . 8 8 8 8 . . . . . 
        . . . . . . . a a a a . . . . . 
        . . . . . . 5 8 8 8 8 5 . . . . 
        . . . . . . . a a a a . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e 5 e e e e . . . . 
        . . . . . . . e e e e e . . . . 
        . . . . . . 5 5 5 e e e . . . . 
        . . . . . . 5 5 5 e e e . . . . 
        . . . . . . . 8 8 8 e . . . . . 
        . . . . . . . 8 8 8 8 . . . . . 
        . . . . . . . a a a a . . . . . 
        . . . . . . . 8 5 8 8 . . . . . 
        . . . . . . . a a a a . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e 5 e . . . . . . 
        . . . . e e e e e . . . . . . . 
        . . . . e e e 5 5 5 . . . . . . 
        . . . . e e e 5 5 5 . . . . . . 
        . . . . . e 8 8 8 . . . . . . . 
        . . . . . 8 8 8 8 . . . . . . . 
        . . . . . a a a a . . . . . . . 
        . . . . 5 8 8 8 8 5 . . . . . . 
        . . . . . a a a a . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e 5 e . . . . . . 
        . . . . e e e e e . . . . . . . 
        . . . . e e e 5 5 5 . . . . . . 
        . . . . e e e 5 5 5 . . . . . . 
        . . . . . e 8 8 8 . . . . . . . 
        . . . . . 8 8 8 8 . . . . . . . 
        . . . . . a a a a . . . . . . . 
        . . . . . 8 8 5 8 . . . . . . . 
        . . . . . a a a a . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e 5 5 5 e e . . . . . 
        . . . . e 5 5 5 5 5 e . . . . . 
        . . . . e e e 5 e e e . . . . . 
        . . . . e 5 5 5 5 5 e . . . . . 
        . . . . . e 8 8 8 e . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 8 a a a a a 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 5 a a a a a 5 . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . . . e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e 5 5 5 e e . . . . . 
        . . . . e 5 5 5 5 5 e . . . . . 
        . . . . e e e 5 e e e . . . . . 
        . . . . e 5 5 5 5 5 e . . . . . 
        . . . . . e 8 8 8 e . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 8 a a a a a 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 5 a a a a a 5 . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile18)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e e 5 5 e e . . . . . 
    . . . . e 5 5 5 5 5 e . . . . . 
    . . . . e e e 5 e e e . . . . . 
    . . . . e 5 5 5 5 5 e . . . . . 
    . . . . . e 8 8 8 e . . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . . 8 a a a a a 8 . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . . 5 a a a a a 5 . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e . e e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
