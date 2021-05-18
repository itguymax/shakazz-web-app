
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
  name: yup.string().required("Le nom d'utilisateur est requis").min(6, "Le nom d'utilisateur doit avoir minimum 6 characteres"),
  dob: yup.date().required(),
  adresse: yup.string().required(),
  phone_number: yup.string().required(),
  pseudo: yup.date().required(),
  email: yup.string()
    .required('Email incorrect')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      `Doit contenir 8 caractères, une majuscule,
       une minuscule, un chiffre et un caractère de cas particulier`
    ).test('checkEmailUnique', 'Email existe deja.', async (value) =>{
     return "ok"
   }),
})

const depotSchema = yup.object().shape({
  wallet: yup.string().default('Wallet pricinpal'),
  method: yup.string().default('Bitcoin'),
  montant: yup.number().min(100, "Le Montant Minimum de depot est de 100 usd").required("Entrez le montant en USD"),
  quantitebtc: yup.number(),
  transactionPassword: yup.string().required("Entrez votre mot de pass de transaction").min(9, "Format Incorrect"),
})

const retraitSchema = yup.object().shape({
  montant: yup.string(),
  portefeuille: yup.string(),
  transactionPassword: yup.string(),
  quantitebtc: yup.string(),
})
const legacySchema = yup.object().shape({
  name: yup.string().required(),
  dateDeNaissance: yup.date().required(),
  nationnalite: yup.string().required(),
  adresse: yup.string(),
  telephone: yup.string(),
  parente: yup.string(),
  officialDoc: yup.string(),
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
  address: yup.string().required("Entrez l'address du portefeuille")
})


export { kycSchema,profileSchema,portefeuilleSchema,registrationSchema,transactionPasswordSchema,subscriptionFormSchema,passwordSchema,contactFormSchema, twofaSchema,legacySchema, depotSchema, loginSchema, retraitSchema, forgotPasswordSchema, resetPasswordSchema} ;
