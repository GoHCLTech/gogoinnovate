<?php

namespace Hcl;

use \Rocketeer\Abstracts\Strategies\AbstractDependenciesStrategy;
use Rocketeer\Interfaces\Strategies\DependenciesStrategyInterface;

class NoDependancyStrategy extends AbstractDependenciesStrategy  implements DependenciesStrategyInterface
{
    protected $description = 'No dependancies';
    protected $binary = 'which';
}
