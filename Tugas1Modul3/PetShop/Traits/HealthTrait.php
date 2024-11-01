<?php
namespace PetShop\Traits;

trait HealthTrait {
    private $health = 100;

    public function getHealth() {
        return $this->health;
    }

    public function reduceHealth($amount) {
        $this->health -= $amount;
        if ($this->health < 0) $this->health = 0;
    }

    public function increaseHealth($amount) {
        $this->health += $amount;
        if ($this->health > 100) $this->health = 100;
    }
}
