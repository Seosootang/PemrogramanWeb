<?php
namespace PetShop\Models;

use PetShop\Traits\HealthTrait;

abstract class Pet {
    use HealthTrait;

    protected $name;
    protected $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function getName() {
        return $this->name;
    }

    public function getAge() {
        return $this->age;
    }

    // Abstract method harus diimplementasikan oleh subclass
    abstract public function makeSound();
}
