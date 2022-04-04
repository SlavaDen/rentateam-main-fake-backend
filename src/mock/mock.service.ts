import {Injectable} from "@nestjs/common";

@Injectable()
export class MockService {

    constructor() {}

    async getCategories() {
        const categories = [
          {
            id: 1,
            name: "Бургеры",
            products: [
              1,2,3,4,5,6,7
            ]
          },
          {
            id: 2,
            name: "Твистеры",
            products: [
              8,9,10,11
            ]
          },
          {
            id: 3,
            name: "Курица",
            products: [
              12,13,14,15
            ]
          },
          {
            id: 4,
            name: "Баскеты",
            products: [
              16,17,18,19
            ]
          },
          {
            id: 5,
            name: "Снэки",
            products: [
              20,21,22,23
            ]
          },
          {
            id: 6,
            name: "Соусы",
            products: [
              24,25,26,27
            ]
          },
          {
            id: 7,
            name: "Напитки",
            products: [
              28,29,30,31
            ]
          },
          {
            id: 8,
            name: "Кофе и чай",
            products: [
              32,33,34,35
            ]
          },
          {
            id: 9,
            name: "Десерты",
            products: [
              36,37,38,39
            ]
          },
          {
            id: 10,
            name: "Хиты по 50",
            products: [
              40,41,42,43
            ]
          },
          {
            id: 11,
            name: "Хиты по 51",
            products: [
              44,45,46,47
            ]
          },
        ];

        return categories;
    }

    async getProducts() {
      const products = [
        {
          id: 1,
          name: "Бургер без доставки",
          price: "144",
          delivery: false,
          img: "https://s82079.cdn.ngenix.net/330x0/X4eyRrugynKehEm2Wr8YEZeo.png",
        },
        {
          id: 2,
          name: "Бургер",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/X4eyRrugynKehEm2Wr8YEZeo.png",
        },
        {
          id: 3,
          name: "Бургер без доставки",
          price: "144",
          delivery: false,
          img: "https://s82079.cdn.ngenix.net/330x0/X4eyRrugynKehEm2Wr8YEZeo.png",
        },
        {
          id: 4,
          name: "Бургер",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/X4eyRrugynKehEm2Wr8YEZeo.png",
        },
        {
          id: 5,
          name: "Бургер без доставки",
          price: "144",
          delivery: false,
          img: "https://s82079.cdn.ngenix.net/330x0/X4eyRrugynKehEm2Wr8YEZeo.png",
        },
        {
          id: 6,
          name: "Бургер",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/X4eyRrugynKehEm2Wr8YEZeo.png",
        },
        {
          id: 7,
          name: "Бургер без доставки",
          price: "144",
          delivery: false,
          img: "https://s82079.cdn.ngenix.net/330x0/X4eyRrugynKehEm2Wr8YEZeo.png",
        },
        {
          id: 8,
          name: "Твистер",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/gVuS5qWLXj8oZgfRUSN9x3wv.png",
        },
        {
          id: 9,
          name: "Твистер без доставки",
          price: "144",
          delivery: false,
          img: "https://s82079.cdn.ngenix.net/330x0/gVuS5qWLXj8oZgfRUSN9x3wv.png",
        },
        {
          id: 10,
          name: "Твистер",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/gVuS5qWLXj8oZgfRUSN9x3wv.png",
        },
        {
          id: 11,
          name: "Твистер без доставки",
          price: "144",
          delivery: false,
          img: "https://s82079.cdn.ngenix.net/330x0/gVuS5qWLXj8oZgfRUSN9x3wv.png",
        },
        {
          id: 12,
          name: "3 стрипса",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/MTnB3ERP1htqWFwPo99GF3Vd.png",
        },
        {
          id: 13,
          name: "3 стрипса без доставки",
          price: "144",
          delivery: false,
          img: "https://s82079.cdn.ngenix.net/330x0/MTnB3ERP1htqWFwPo99GF3Vd.png",
        },
        {
          id: 14,
          name: "3 стрипса",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/MTnB3ERP1htqWFwPo99GF3Vd.png",
        },
        {
          id: 15,
          name: "3 стрипса",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/MTnB3ERP1htqWFwPo99GF3Vd.png",
        },
        {
          id: 16,
          name: "Баскет",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/8ju4v3Q9mQppShTxm8MBBXzs.png",
        },
        {
          id: 17,
          name: "Баскет",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/8ju4v3Q9mQppShTxm8MBBXzs.png",
        },
        {
          id: 18,
          name: "Баскет",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/8ju4v3Q9mQppShTxm8MBBXzs.png",
        },
        {
          id: 19,
          name: "Баскет",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/8ju4v3Q9mQppShTxm8MBBXzs.png",
        },
        {
          id: 20,
          name: "Снек",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/cgU1tWPHTBj4WDX3m43MR1kx.png",
        },
        {
          id: 21,
          name: "Снек",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/cgU1tWPHTBj4WDX3m43MR1kx.png",
        },
        {
          id: 22,
          name: "Снек",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/cgU1tWPHTBj4WDX3m43MR1kx.png",
        },
        {
          id: 23,
          name: "Снек",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/cgU1tWPHTBj4WDX3m43MR1kx.png",
        },
        {
          id: 24,
          name: "Соус",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/UDPyJBVmKhnzweYe9kwWSGyJ.png",
        },
        {
          id: 25,
          name: "Соус",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/UDPyJBVmKhnzweYe9kwWSGyJ.png",
        },
        {
          id: 26,
          name: "Соус",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/UDPyJBVmKhnzweYe9kwWSGyJ.png",
        },
        {
          id: 27,
          name: "Соус",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/UDPyJBVmKhnzweYe9kwWSGyJ.png",
        },
        {
          id: 28,
          name: "Напиток",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/8y2VuNHBecNA5p7uetrUSPnu.png",
        },
        {
          id: 29,
          name: "Напиток",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/8y2VuNHBecNA5p7uetrUSPnu.png",
        },
        {
          id: 30,
          name: "Напиток",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/8y2VuNHBecNA5p7uetrUSPnu.png",
        },
        {
          id: 31,
          name: "Напиток",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/330x0/8y2VuNHBecNA5p7uetrUSPnu.png",
        },
        {
          id: 32,
          name: "Чай",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/E6ww5qRFgmcu8BiALW6SV6qk.png",
        },
        {
          id: 33,
          name: "Чай",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/E6ww5qRFgmcu8BiALW6SV6qk.png",
        },
        {
          id: 34,
          name: "Чай",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/E6ww5qRFgmcu8BiALW6SV6qk.png",
        },
        {
          id: 35,
          name: "Чай",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/E6ww5qRFgmcu8BiALW6SV6qk.png",
        },
        {
          id: 36,
          name: "Десерт",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/Y6xGVRPQMW6Eb4Z5t1xgk3cQ.png",
        },
        {
          id: 37,
          name: "Десерт",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/Y6xGVRPQMW6Eb4Z5t1xgk3cQ.png",
        },
        {
          id: 38,
          name: "Десерт",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/Y6xGVRPQMW6Eb4Z5t1xgk3cQ.png",
        },
        {
          id: 39,
          name: "Десерт",
          price: "144",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/Y6xGVRPQMW6Eb4Z5t1xgk3cQ.png",
        },
        {
          id: 40,
          name: "ХИТ 50",
          price: "50",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/Y6xGVRPQMW6Eb4Z5t1xgk3cQ.png",
        },
        {
          id: 41,
          name: "ХИТ 50",
          price: "50",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/Y6xGVRPQMW6Eb4Z5t1xgk3cQ.png",
        },
        {
          id: 42,
          name: "ХИТ 50",
          price: "50",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/Y6xGVRPQMW6Eb4Z5t1xgk3cQ.png",
        },
        {
          id: 43,
          name: "ХИТ 50",
          price: "50",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/Y6xGVRPQMW6Eb4Z5t1xgk3cQ.png",
        },
        {
          id: 44,
          name: "ХИТ 51",
          price: "51",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/Y6xGVRPQMW6Eb4Z5t1xgk3cQ.png",
        },
        {
          id: 45,
          name: "ХИТ 51",
          price: "51",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/Y6xGVRPQMW6Eb4Z5t1xgk3cQ.png",
        },
        {
          id: 46,
          name: "ХИТ 51",
          price: "51",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/Y6xGVRPQMW6Eb4Z5t1xgk3cQ.png",
        },
        {
          id: 47,
          name: "ХИТ 51",
          price: "51",
          delivery: true,
          img: "https://s82079.cdn.ngenix.net/295x0/Y6xGVRPQMW6Eb4Z5t1xgk3cQ.png",
        },
      ];

      return products;
  }
}