<?php
class Rational implements Iterator {
    private $n = 0;

    public function __construct() {
        $this->n = 0;
    }

    public function rewind() {
        $this->n = 0;
    }

    public function current() {
        $diagonal = (-1 + sqrt(1 + 8 * $this->n)) / 2;
        $diagonalInt = round($diagonal);
        $startOfDiagonal = ($diagonalInt * ($diagonalInt + 1)) / 2;
        $numerator = ( $this->n - $startOfDiagonal) + 1;
        $denominator = $diagonal - ($this->n - $startOfDiagonal) + 1;
        echo (int)abs($numerator) . "/" . (int)abs($denominator);
    }

    public function key() {
        return $this->n;
    }
    public function next() {
        ++$this->n;
    }

    public function valid() {
      return true;
    }
}

$rational = new Rational;
foreach($rational as $value) {
    ($value);
    echo "\n";
    sleep(1);
}


?>