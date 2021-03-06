import joi from "joi";

const signUpSchema = joi.object({
    name: joi
        .string()
        .min(2)
        .max(100)
        .pattern((/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u))
        .required(),
    email: joi
        .string()
        .email({ tlds: { allow: false } })
        .required(),
    password: joi.string().min(8).max(64).required(),
    passwordConfirmation: joi.ref("password"),
});

const signInSchema = joi.object({
    email: joi
        .string()
        .email({ tlds: { allow: false } })
        .required(),
    password: joi.string().min(8).max(64).required(),
});

export { signUpSchema, signInSchema };
