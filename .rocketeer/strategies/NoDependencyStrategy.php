<?php

namespace Hcl;

use \Rocketeer\Abstracts\Strategies\AbstractDependenciesStrategy;
use Rocketeer\Interfaces\Strategies\DependenciesStrategyInterface;

class NoDependencyStrategy extends AbstractDependenciesStrategy  implements DependenciesStrategyInterface
{
    protected $description = 'No dependencies';

    public function install()
    {
        return $this->description;
    }

    public function update()
    {
        return $this->install();
    }
}
