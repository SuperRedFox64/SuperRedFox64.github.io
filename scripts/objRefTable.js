const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Behaviors.TileMovement,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.SetPos
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Solid: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Keyboard: 0},
	{DialogueText: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite4: 0},
	{TileMovement: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{DialogueText2: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	DialogueText: class extends self.ITextInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	DialogueText2: class extends self.ITextInstance {}
}