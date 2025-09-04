extends Node2D

@export var outfits = []
var currentOutfit = 0

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	currentOutfit = randi_range(0,2)
	$Sprite2D.texture = outfits[currentOutfit]


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	$Sprite2D.texture = outfits[currentOutfit]


func _on_left_pressed() -> void:
	if currentOutfit < 2:
		currentOutfit+=1
	else:
		currentOutfit=0


func _on_right_pressed() -> void:
	if currentOutfit > 0:
		currentOutfit-=1
	else:
		currentOutfit=2
