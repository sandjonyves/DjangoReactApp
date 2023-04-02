import BodyLeftOne from "../BodyComponent/BodyLeftOne"
import Navbar from "../Navbar"
import Footer from "./Footer"



function BodyOther(params) {

    let  DivStyle = "block mt-5 mr-20 md:ml-48 h-auto ml-20"
    let FIgStyle = "md:flex  rounded-xl p-8 md:p-0 mx-20 my-5 md:mx-48  "
    
    return <div>

        <div>
            <Navbar/>
        </div>
<div class="mt-48 text-center ">
    <h2 className="uppercase">Questions que les parents posent</h2>
    <h3 class="pt-12">Comment vérifiez-vous vos tuteurs?</h3></div>
        <div class={DivStyle}>
            {/* <h3 class="">Comment vérifiez-vous vos tuteurs?</h3> */}
            <p class=" text-left mt-8 font-display">Avant qu'un tuteur soit accepté en tant que tuteur prepdia,
             il doit passer par 3 étapes qui lui permettent de nous fournir ses documents 
             d'identité et certificats valides. Des vérifications des antécédents, 
             des entretiens, des tests de personnalité sont également effectués sur ces tuteurs.
         </p></div>

         <div className="text-center"><h1 class="pt-5">Pourquoi obtenir un tuteur de Prepdia au 
            lieu d'en chercher un moi-même?</h1></div>
         <div class={DivStyle}>
            {/* <h1 class="uppercase">Pourquoi obtenir un tuteur de Prepdia au 
            lieu d'en chercher un moi-même?</h1> */}
            <p class=" text-left mt-8 font-display">L'éducation de votre enfant ne doit
             pas être une conjecture et en tant que tel, votre enfant mérite un
              tuteur compétent et le mieux adapté. Nous vous le garantissons. 
              nous avons une large collection de tuteurs professionnels qui ont été vérifiés.
               Vous trouverez le tuteur qui correspond aux besoins
                de votre enfant sans vous stresser. </p>
                </div>
            
            <div className="text-center"><h3 class="pt-5 ">Comment facturez-vous et quels sont vos tarifs?</h3></div>
            <div class={DivStyle}>
                {/* <h3 class="">Comment facturez-vous et quels sont vos tarifs?</h3> */}
                <p class="text-left mt-8 ">Nous vous facturons en fonction de la 
                durée de la leçon et du niveau de l'enfant. Pour toute demande, vous pouvez 
                toujours nous joindre au 654340911</p>
                </div>
                
                <div className="text-center "><h3 class="pt-5">Où se dérouleront les leçons ?</h3></div>
                <div class={DivStyle}>
                <p class="text-left mt-8">Votre enfant apprend dans le confort de sa maison </p>
                </div>
                
                <div className="text-center"><h3 className="pt-5">Comment je paye ?</h3></div>
                <div class={DivStyle}>
                    {/* <h3 class="">Comment je paye ?</h3> */}
                    <p class=" text-left mt-8">Les paiements sont effectués en ligne à l'aide d'un compte d'envoi d'argent mobile de votre choix. Les leçons commencent immédiatement après que nous ayons convenu avec le répétiteur que vous souhaitez payer </p>
                    </div>


                    <div>

                      <h1 className="text-center text-xl pt-10">comment le tutorat peut aider votre enfant ?</h1>
                    <figure className={FIgStyle}>
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="logo.png" alt="" width="384" height="512"></img>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium text-white">
        Meilleurs notes
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
      obteniz des meilleur resultats aux examens et augmentez la confiance en lui.
      </div>
      <div class="text-slate-700 dark:text-slate-500">
       obteniz des meilleur resultats aux examens et augmentez la confiance en lui.
      </div>
    </figcaption>
  </div>
</figure>
     </div>

     <div>
                    <figure className={FIgStyle}>
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="logo.png" alt="" width="384" height="512"></img>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium text-white">
       préparation aux examens
      </p>
    </blockquote>
    <figcaption class="font-medium">
    <div class="text-sky-500 dark:text-sky-400">
    avoir plus de temps et d'assistance pour vous aux examens professionnels.
      </div>
      <div class="text-slate-700 dark:text-slate-500">
       avoir plus de temps et d'assistance pour vous aux examens professionnels.
      </div>
    </figcaption>
  </div>
</figure>
     </div>

     <div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                    <figure className={FIgStyle}>
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="logo.png" alt="" width="384" height="512"></img>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium text-white">
       Apprentissage pesonnalisé
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
       mieux comprendre les leçons et obtenir une 
       meilleur aide pour les devoirs
      </div>
      <div class="text-slate-700 dark:text-slate-500">
      mieux comprendre les leçons et obtenir une 
       meilleur aide pour les devoirs
      </div>
      <div>
     
      </div>
    </figcaption>
  </div>
</figure>
     </div>

    <div className=""> 
        <BodyLeftOne ></BodyLeftOne>
    </div>

    </div>
    
}

export default BodyOther