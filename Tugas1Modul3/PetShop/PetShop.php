<?php
namespace PetShop;

use PetShop\Models\Pet;

class PetShop {
    private $name;
    private $pets = [];

    public function __construct($name) {
        $this->name = $name;
    }

    public function addPet(Pet $pet) {
        $this->pets[] = $pet;
    }

    public function getPets() {
        return $this->pets;
    }

    public function listPets() {
        foreach ($this->pets as $pet) {
            echo "Name: " . $pet->getName() . ", Age: " . $pet->getAge() . ", Sound: " . $pet->makeSound() . "\n";
        }
    }

    public function __toString() {
        return $this->name . " with " . count($this->pets) . " pets.<br>\n";
    }
}
