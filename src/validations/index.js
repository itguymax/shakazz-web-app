
import * as yup from "yup";
import config from "../services/config"

const registrationSchema = yup.object().shape({
confirmpassword: yup.string().required().oneOf([yup.ref('password'), null], 'Le mot de passe de confirmation doit etre identique'),
password: yup.string()
    .required('Entrez un mot de passe')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et un caractère de cas particulier"
    ),
email: yup.string().email("Entrez une email valide ").required("l'email est requis")
                    .matches(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, "entrez une email valide")
                    .test('checkEmailUnique', 'Email existe deja.', async (value) =>{
                     const res = await  fetch(`${config.root}/auth/uniqueEmail/${value}`);
                     const resp = await res.json();

                     return "ok"
                    }
    ),
firstName: yup.string(),
lastName: yup.string(),
term: yup.boolean().oneOf([true], 'Acceptez les termes et conditions'),
userName: yup.string().required("Le nom d'utilisateur est requis")
.min(6, "Le nom d'utilisateur doit avoir minimum 6 characteres")
.test('checkUsernameUnique', 'user existe deja.', async (value) =>{
                     const res = await  fetch(`${config.root}/auth/uniqueUserName/${value}`);
                     const resp = await res.json();
                     return !resp.data.used
                    }),

});

const loginSchema = yup.object().shape({
password: yup.string()
    .required('Entrez un mot de passe')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Le mot de passe doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et un caractère de cas particulier"
    ),
userName: yup.string().required("Le nom d'utilisateur est requis").min(6, "Le nom d'utilisateur doit avoir minimum 6 characteres")
// .test('checkUsernameUnique', 'user existe deja.', async (value) =>{
//                      const res = await  fetch(`${config.root}/auth/uniqueUserName/${value}`);
//                      const resp = await res.json();
//                      return resp.data.used
//                     }),

});
const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Entrez une email valide ").required("l'email est requis").matches(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, "entrez une email valide")
  .test('checkEmailUnique', 'Email existe deja.', async (value) =>{
                     const res = await  fetch(`${config.root}/auth/uniqueEmail/${value}`);
                     const resp = await res.json();
                     return resp.data.used
                    }
    ),
})

const resetPasswordSchema = yup.object().shape({
  confirmpassword: yup.string().required("Confirmez le mot de passse").oneOf([yup.ref('password'), null], 'Le mot de passe de confirmation doit etre identique'),
  password: yup.string()
    .required('Entrez un mot de passe')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      `Doit contenir 8 caractères, une majuscule,
       une minuscule, un chiffre et un caractère de cas particulier`
    ),
})

const profileSchema = yup.object().shape({
  name: yup.string().required("Le nom d'utilisateur est requis"),
  dob: yup.date().required("La date de naissance est requise"),
  adresse: yup.string().required("L'adresse est requise"),
  telephone: yup.number().required("Le numéro de téléphone est requis"),
  username: yup.string(),
  email: yup.string()
    .required('Email incorrect')
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      `Doit contenir 8 caractères, une majuscule,
       une minuscule, un chiffre et un caractère de cas particulier`
    ).test('checkEmailUnique', 'Email existe deja.', async (value) =>{
     return true;
   }),
  account_type: yup.string(),
  sexe: yup.string(),
  nationnalite: yup.string(),
})

const depotBTCSchema = yup.object().shape({
  depot_btc_montant_usd: yup.number("Veuillez entrez un nombre").min(100, "Le Montant Minimum de depot est de 100 usd").required("Entrez le montant en USD"),
})

const retraitSchema = yup.object().shape({
  amount: yup.number("Veuillez entrez un nombre").min(10, "Le Montant Minimum de retrait est de 10 usd").required("Entrez le montant en USD"),
  rib: yup.string("Veuillez entrez un nombre").required("Entrez le RIB/Numero de dépôt/Adresse Bitcoin"),
  transactionPassword: yup.string().required("Entrez le mot de passe de transaction")
})
const legacySchema = yup.object().shape({
  name: yup.string().required(),
  dateDeNaissance: yup.date().required(),
  nationnalite: yup.string(),
  adresse: yup.string(),
  telephone: yup.string(),
  parente: yup.string(),
  canal: yup.string(),
  pourcentageHeritage: yup.number().max(100, "should be less or equal to 100")

})
const twofaSchema = yup.object().shape({
  canal: yup.string(),
})


const passwordSchema = yup.object().shape({
  oldPassword: yup.string().required('Entrez votre mot de passe actuel').matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Le mot de passe doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et un caractère de cas particulier"
    ),
  newPassword: yup.string().required('Entrez votre nouveau mot de passe').matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Le mot de passe doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et un caractère de cas particulier"
    ),
  repeatNewPassword: yup.string().required('Confirmer le nouveau mot de passe').oneOf([yup.ref('newPassword'), null], 'Le mot de passe de confirmation doit etre identique'),

})
const transactionPasswordSchema = yup.object().shape({
  oldPassword: yup.string().required('Entrez votre mot de passe actuel').matches(
      /^\w+$/,
      "Le mot de passe doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et un caractère de cas particulier"
    ),
  newPassword: yup.string().required('Entrez votre nouveau mot de passe').matches(
      /^\w+$/,
      "Le mot de passe doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et un caractère de cas particulier"
    ),
  repeatNewPassword: yup.string().required('Confirmer le nouveau mot de passe').oneOf([yup.ref('newPassword'), null], 'Le mot de passe de confirmation doit etre identique'),

})
const contactFormSchema = yup.object().shape({
  name:yup.string().required('Entrez votre nom'),
  phone: yup.string().required('Entrez votre numero de telephone'),
  email: yup.string().matches(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, "entrez une email valide"),
  message: yup.string().required('laissez nous un message'),
})

const kycSchema = yup.object().shape({
  kyc_display: yup.string().matches(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, "Veuillez insérer une image valide"),
})

const subscriptionFormSchema = yup.object().shape({
  email: yup.string().matches(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, "Veuillez insérer une adresse mail valide"),
})
const portefeuilleSchema = yup.object().shape({
  nom: yup.string().required("Entrez le nom du portefeuille"),
  address: yup.string().required("Entrez l'address du portefeuille"),
  type: yup.string(),
})


export { kycSchema,profileSchema,portefeuilleSchema,registrationSchema,transactionPasswordSchema,subscriptionFormSchema,passwordSchema,contactFormSchema, twofaSchema,legacySchema, depotBTCSchema, loginSchema, retraitSchema, forgotPasswordSchema, resetPasswordSchema} ;
