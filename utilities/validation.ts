export const formStatus = {
  name: { touched: false, error: false },
  email: { touched: false, error: false },
  phone: { touched: false, error: false},
};
const fieldElements = ["name", "email", "phone"];

export const formStatusFilter = (name: string, prop: string, val: boolean) => {
  const tmpFormStatus = {
    ...formStatus,
  };
  tmpFormStatus[name][prop] = val;
};
const checkEmail = (emailAddress) => {
  return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
    emailAddress
  );
};
export async function validatate(name: string, value: string)  {

  if (name === "name") {
    if (value.length < 4) {
      formStatusFilter(name, "error", true);
    } else {
      formStatusFilter(name, "error", false);
    }
  }
  if (name === "phone") {

    if (value.length !== 14) {
      formStatusFilter(name, "error", true);
    } else {
      formStatusFilter(name, "error", false);
    }
  }
  if (name === "email") {
    formStatusFilter("email", "error", !checkEmail(value));

  }

  for (let i = 0; i < fieldElements.length; i++) {
    if (
      formStatus[fieldElements[i]].error ||
      !formStatus[fieldElements[i]].touched
    ) {
   
      return ({...formStatus, validated: false})
    }  
  }

  return ({...formStatus, validated: true})

};

export const normalizePhone = (phoneNumber: any) => {
  const x =
    phoneNumber &&
    phoneNumber.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  return !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ""}`;
};
