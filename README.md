# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# reduxAPi




## Redux Project

    📋 Texnik Vazifa: "RTK User Explorer"Loyiha maqsadi:Redux Toolkit (RTK) yordamida tashqi API (JSONPlaceholder) bilan ishlash, ma'lumotlarni yuklash jarayonini (loading), muvaffaqiyatli holatni (success) va xatoliklarni (error) boshqarishni o'rganish.1. Asosiy Talablar:Store Setup: Loyihada yagona store yaratish va uni Provider orqali ilovaga ulash.Asinxron Amallar: API bilan ishlash uchun createAsyncThunk dan foydalanish.State Management: Ma'lumotlarni saqlash uchun createSlice va API holatlarini boshqarish uchun extraReducers.UI/UX: Ma'lumot kelguncha "Loading..." matnini ko'rsatish, xato bo'lsa xabar berish.2. Ma'lumotlar Strukturasi (Initial State):Store ichidagi users bo'limi quyidagi ko'rinishda bo'lishi shart:JavaScript{
      data: [],      // API dan kelgan massiv
      loading: false, // Yuklanish holati (true/false)
      error: null     // Xatolik xabari (string/null)
    }
    3. Funksional Vazifalar (Step-by-Step):QadamVazifaIshlatiladigan vosita1API'dan ma'lumot oluvchi funksiya yozish.createAsyncThunk2users uchun slice yaratish va 3 ta holatni (pending, fulfilled, rejected) boshqarish.createSlice & extraReducers3Slicedan chiqqan reducerni asosiy store'ga ulash.configureStore4Komponent yuklanganda API-ga so'rov yuborish.useDispatch & useEffect5Store'dagi ma'lumotlarni olib, ekranga chiqarish.useSelector4. Tekshirish uchun Savollar (Self-Check):Nima uchun biz reducers emas, aynan extraReducers ishlatdik?dispatch(fetchUsers()) chaqirilganda, Slice ichidagi birinchi bo'lib qaysi holat (case) ishga tushadi?API manzili noto'g'ri bo'lsa, foydalanuvchi ekranda nimani ko'rishi kerak?5. Kutilayotgan Natija:Ekran ochilganda foydalanuvchilar ismlari ro'yxati chiqishi kerak. Agar internet bo'lmasa yoki API xato bersa, qizil rangda "Xatolik" xabari chiqishi shart.
