## Redux Project

    📋 Texnik Vazifa: "RTK User Explorer"Loyiha maqsadi:Redux Toolkit (RTK) yordamida tashqi API (JSONPlaceholder) bilan ishlash, ma'lumotlarni yuklash jarayonini (loading), muvaffaqiyatli holatni (success) va xatoliklarni (error) boshqarishni o'rganish.
    1. Asosiy Talablar:
     Store Setup:
       Loyihada yagona store yaratish va uni Provider orqali ilovaga ulash.Asinxron Amallar:
        API bilan ishlash uchun createAsyncThunk dan foydalanish.State Management:
         Ma'lumotlarni saqlash uchun createSlice va API holatlarini boshqarish uchun extraReducers.UI/UX:
          Ma'lumot kelguncha "Loading..." matnini ko'rsatish, xato bo'lsa xabar berish.
          2. Ma'lumotlar Strukturasi (Initial State):
           Store ichidagi users bo'limi quyidagi ko'rinishda bo'lishi shart:
            JavaScript{
             data: [],      // API dan kelgan massiv
             loading: false, // Yuklanish holati (true/false)
             error: null     // Xatolik xabari (string/null)
            }
    3. Funksional Vazifalar (Step-by-Step):
      Qadam Vazifa Ishlatiladigan vosital API'dan ma'lumot oluvchi funksiya yozish. createAsyncThunkusers uchun slice yaratish va 3 ta holatni (pending, fulfilled, rejected) boshqarish. createSlice & extraReducers Slicedan chiqqan reducerni asosiy store'ga ulash. configureStoreKomponent yuklanganda API-ga so'rov yuborish.useDispatch & useEffectStore'dagi ma'lumotlarni olib, ekranga chiqarish. useSelector. Tekshirish uchun Savollar (Self-Check):Nima uchun biz reducers emas, aynan extraReducers ishlatdik? dispatch(fetchUsers()) chaqirilganda, Slice ichidagi birinchi bo'lib qaysi holat (case) ishga tushadi? API manzili noto'g'ri bo'lsa, foydalanuvchi ekranda nimani ko'rishi kerak?. Kutilayotgan Natija:Ekran ochilganda foydalanuvchilar ismlari ro'yxati chiqishi kerak. Agar internet bo'lmasa yoki API xato bersa, qizil rangda "Xatolik" xabari chiqishi shart.
