// Assuming you have two views or elements: view1 and view2
// You want to position view1 below view2 with at least 8 points of space between them

// Example using UIKit in iOS (Swift)
view1.topAnchor.constraint(equalTo: view2.bottomAnchor, constant: 8).isActive = true

// Example using ConstraintLayout in Android (Kotlin)
ConstraintSet().apply {
    connect(view1.id, ConstraintSet.TOP, view2.id, ConstraintSet.BOTTOM, 8)
    applyTo(constraintLayout)
}
