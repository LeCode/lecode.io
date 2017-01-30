<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class Fonctions extends Controller
{
    /**
     * @Route("/test/{param}")
     */
    public function showAction($param)
    {
        $notes = [
            'Coucou,',
            'Tu veux voir ma bite ?',
            'Nice !'
        ];
        return $this->render('test/show.html.twig',[
            'name' => $param,
            'notes' => $notes]);

    }
}