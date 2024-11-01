<?php
namespace PetShop\Models;

class Dog extends Pet {
    public function makeSound() {
        return "Woof! Woof!";
    }
}
