extends Node2D

@export var outfits = []
var correctOutfit
var gameWon = false
var inGameTime

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	correctOutfit = randi_range(0,2)
	$Sprite2D.texture = outfits[correctOutfit]
	inGameTime = 0


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	inGameTime += delta
	
	if !gameWon:
		$Timer.text = "Time: " + str(roundf(inGameTime))
		$TimerEnd.text = "Time: " + str(roundf(inGameTime))
	else:
		for child in get_children():
			child.visible = false
			$TimerEnd.visible = true
			$ResetButton.visible = true


func _on_submit_button_pressed() -> void:
	if $Outfitsection.currentOutfit == correctOutfit && $Outfitsection2.currentOutfit == correctOutfit && $Outfitsection3.currentOutfit == correctOutfit:
		print("win")
		gameWon = true
	else:
		print("nope")


func _on_reset_button_pressed() -> void:
	get_tree().reload_current_scene()
	print("reset")
