extends Node2D

@export var outfits = []
var correctOutfit

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	correctOutfit = randi_range(0,2)
	$Sprite2D.texture = outfits[correctOutfit]


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass


func _on_submit_button_pressed() -> void:
	if $Outfitsection.currentOutfit == correctOutfit && $Outfitsection2.currentOutfit == correctOutfit && $Outfitsection3.currentOutfit == correctOutfit:
		print("win")
	else:
		print("nope")
