import Player from "../objects/Player";

export default function playerController(obj: Player, distance: number) {
  obj.updateWeapon();
  obj.directionX = obj.directionY = 0;
  const { up, down, left, right, space, shift } = obj.scene.cursors;
  if (up.isDown) obj.moveUp();
  if (down.isDown) obj.moveDown();
  if (left.isDown) obj.moveLeft();
  if (right.isDown) obj.moveRight();
  if (space.isDown && obj.weaponRotation == 0) obj.weaponRotation = 0.1;
  if (obj.scene.spotlight) {
    obj.scene.spotlight.setPosition(obj.x, obj.y);
  }
}
