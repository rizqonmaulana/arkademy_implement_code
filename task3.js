let arkFood = (harga, voucher, jarak, pajak) => {
    if (typeof harga !== 'number') { return 'input harga harus berupa number' }
    if (typeof voucher !== 'string') { return 'input voucher harus berupa string' }
    if (typeof jarak !== 'number') { return 'input jarak harus berupa number'}
    if (typeof pajak !== 'boolean') { return 'input pajak harus berupa boolean' }

    const voucherCode = [
        {
            code : 'ARKAFOOD5',
            disc : 50/100,
            maxDisc : 50000,
            minPrice : 50000,
            maxPrice : 100000
        },
        {
            code : 'DITRAKTIRDEMY',
            disc : 60/100,
            maxDisc : 30000,
            minPrice : 25000,
            maxPrice : 50000
        },
        {
            code : 'DOREMY',
            disc : 10/100,
            maxDisc : 100000,
            minPrice : 10000,
            maxPrice : 1000000
        }
    ]

    let discount
    let transport
    let tax
    let subTotal

    // discount
    if (voucher) {
        let check = voucherCode.find((item) => {
            if(item.code === voucher)
            return item
        })

        if (check){
            if (harga >= check.minPrice && harga <= check.maxPrice) {
                discount = harga * check.disc
            } else if (harga > check.maxPrice) {
                discount = check.maxDisc
            } else {
                return `untuk mendapatkan discount dengan kode voucher ${check.code} minimal pemesanan adalah Rp ${check.minPrice}`
            }
        } else {
            return 'kode voucher yang anda masukkan salah'
        }
    } else {
        discount = 0
    }

    // transport
    if (jarak > 0 && jarak <= 2) {
        transport = 5000
    } else if (jarak > 2) {
        transport = (jarak - 2) * 3000 + 5000
    } else {
        transport = 0
    }

    // tax
    if (pajak) {
        tax = (harga * 5) / 100
    } else {
        tax = 0
    }

    subTotal = harga - discount + transport + tax

    return `
    Harga       : ${harga}
    Potongan    : ${discount}
    Biaya Antar : ${transport}
    Pajak       : ${tax}
    SubTotal    : ${subTotal}
    `
}

    let result = arkFood(150000, '', 5, false)
    console.log(result)