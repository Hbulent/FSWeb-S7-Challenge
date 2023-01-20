import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import "./Form.css";

const formSchema = Yup.object().shape({
  pizza_tur: Yup.string().required("lütfen seçim yapınız!"),
  size: Yup.string().oneOf(
    ["small", "medium", "large"],
    "Lütfen seçim yapınız!"
  ),
  adsoyad: Yup.string()
    .required("İsim alanı zorunludur")
    .min(3, "İsim en az 3 karakter olmalı"),
  adres: Yup.string()
    .required("Adres alanı zorunludur")
    .min(10, "en az 10 karakter girilmelidir"),
  telefon: Yup.number()
    .typeError("Yalnızca sayı girilmelidir")
    .required("Lütfen telefon numarası girin")
    .min(10, "Telefon numarası 10 hane olarak girilmelidir"),
  siparisadedi: Yup.number().required("Lütfen sipariş adedini girin!"),
  mushroom: Yup.boolean().oneOf([true, false], ""),
  tomato: Yup.boolean().oneOf([true, false], ""),
  pepper: Yup.boolean().oneOf([true, false], ""),
  walnut: Yup.boolean().oneOf([true, false], ""),
  tuna: Yup.boolean().oneOf([true, false], ""),
  bacon: Yup.boolean().oneOf([true, false], ""),
  salami: Yup.boolean().oneOf([true, false], ""),
  barbequedmeat: Yup.boolean().oneOf([true, false], ""),
  siparisnotu: Yup.string(),
});

export default function Form() {
  const [form, setForm] = useState({
    pizza_tur: "",
    size: null,
    mushroom: false,
    tomato: false,
    pepper: false,
    walnut: false,
    tuna: false,
    bacon: false,
    salami: false,
    barbequedmeat: false,
    adsoyad: "",
    adres: "",
    telefon: "",
    siparisnotu: "",
    siparisadedi: "",
  });

  const [errors, setErrors] = useState({
    pizza_tur: "",
    size: "",
    mushroom: "",
    tomato: "",
    pepper: "",
    walnut: "",
    tuna: "",
    bacon: "",
    salami: "",
    barbequedmeat: "",
    adsoyad: "",
    adres: "",
    telefon: "",
    siparisnotu: "",
    siparisadedi: "",
  });

  const [buttonDisabledMi, setButtonDisabledMi] = useState(true);
  const [newSiparis, setNewSiparis] = useState(null);

  useEffect(() => {
    formSchema.isValid(form).then((valid) => setButtonDisabledMi(!valid));
  }, [form]);

  function handleChange(event) {
    const { name, value } = event.target;
    formAlaniniKontrolEt(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  }

  function formAlaniniKontrolEt(name, value) {
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", form)
      .then((response) => {
        console.log(response.data);
        setNewSiparis(response.data);
        setForm({
          pizza_tur: "",
          size: null,
          mushroom: false,
          tomato: false,
          pepper: false,
          walnut: false,
          tuna: false,
          bacon: false,
          salami: false,
          barbequedmeat: false,
          adsoyad: "",
          adres: "",
          telefon: "",
          siparisnotu: "",
          siparisadedi: "",
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="pizza_siparis">
      <form className="order" onSubmit={handleSubmit}>
        <div className="pizza_tur">
          <h3>Pizza türünü seçin</h3>
          <select
            name="pizza_tur"
            value={form.pizza_tur}
            onChange={handleChange}
          >
            <option value=""> Pizza türünü seçin</option>
            <option value="margarita">Margarita</option>
            <option value="pepperoni">Pepperoni</option>
            <option value="napoli">Napoli</option>
            <option value="classic">Classic</option>
          </select>
          {errors.pizza_tur && <h4>{errors.pizza_tur}</h4>}
        </div>
        <div className="pizza_boyut">
          <h3>Pizza boyutunu seçin</h3>
          <input
            type="radio"
            value="small"
            name="size"
            checked={form.size === "small"}
            onChange={handleChange}
          />{" "}
          Small
          <input
            type="radio"
            value="medium"
            name="size"
            checked={form.size === "medium"}
            onChange={handleChange}
          />{" "}
          Medium
          <input
            type="radio"
            value="large"
            name="size"
            checked={form.size === "large"}
            onChange={handleChange}
          />{" "}
          Large
          {errors.size && <h4>{errors.size}</h4>}
        </div>
        <div className="pizza_ekMalzeme">
          <h3>Ekstra malzeme seçimi</h3>
          <label>
            <input
              type="checkbox"
              name="mushroom"
              id="mushroom"
              value={form.mushroom}
              onChange={handleChange}
            />
            Mushroom
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="tomato"
              id="tomato"
              value={form.tomato}
              onChange={handleChange}
            />
            Tomato
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="pepper"
              id="pepper"
              value={form.pepper}
              onChange={handleChange}
            />
            Pepper
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="walnut"
              id="walnut"
              value={form.walnut}
              onChange={handleChange}
            />
            Walnut
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="tuna"
              id="tuna"
              value={form.tuna}
              onChange={handleChange}
            />
            Tuna
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="bacon"
              id="bacon"
              value={form.bacon}
              onChange={handleChange}
            />
            Bacon
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="salami"
              id="salami"
              value={form.salami}
              onChange={handleChange}
            />
            Salami
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="barbequedmeat"
              id="barbequedmeat"
              value={form.barbequedmeat}
              onChange={handleChange}
            />
            Barbequed meat
          </label>
        </div>
        <div className="iletisim">
          <div className="adsoyad">
            <h3>İletişim Bilgileri</h3>
            <label>
              Ad Soyad:
              <input
                type="text"
                name="adsoyad"
                value={form.adsoyad}
                onChange={handleChange}
              />
            </label>
            {errors.adsoyad && <h4>{errors.adsoyad}</h4>}
          </div>
          <div className="adres">
            <label>
              Adres:
              <input
                type="text"
                name="adres"
                value={form.adres}
                onChange={handleChange}
              />
            </label>
            {errors.adres && <h4>{errors.adres}</h4>}
          </div>
          <div className="telefon">
            <label>
              Telefon:
              <input
                type="text"
                name="telefon"
                value={form.telefon}
                onChange={handleChange}
              />
            </label>
            {errors.telefon && <h4>{errors.telefon}</h4>}
          </div>
        </div>
        <div className="siparis_notu">
          <h3>Sipariş Notu</h3>
          <br />
          <label>
            <input
              className="not"
              type="text"
              name="siparisnotu"
              value={form.siparisnotu}
              onChange={handleChange}
            />
          </label>

          {errors.siparisnotu && <h4>{errors.siparisnotu}</h4>}
        </div>
        <div className="siparisadedi">
          <h3>Sipariş adedi</h3>
          <label>
            <input
              className="adet"
              type="number"
              name="siparisadedi"
              min="0"
              value={form.siparisadedi}
              onChange={handleChange}
            />
          </label>
          {errors.siparisadedi && <h4>{errors.siparisadedi}</h4>}

          <input
            type="submit"
            name="button"
            value="siparisi gonder"
            disabled={buttonDisabledMi}
          />
        </div>
        {newSiparis && (
          <p className="onay">
            {newSiparis.adsoyad} adlı kullanıcının {newSiparis.id} no lu
            siparişi oluşturuldu.
          </p>
        )}
      </form>
    </div>
  );
}
