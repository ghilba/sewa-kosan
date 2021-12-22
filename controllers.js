import { Customer, Location, Transaction } from "./models.js"

export const CustomerController = {
    readAll: async (req, res) => {
        try {
            const customers = await Customer.find()
            res.status(200).json(customers)
        } catch (error) {
            res.status(500).json({message: error})
        }
    } ,
    readById: async (req, res) => {
        try {
            const id = req.params.id
            const customer = await Customer.findById(id)
            res.status(200).json(customer)
        } catch (error) {
            res.status(500).json({message: error})
        }
    },
    save: async (req, res) => {
        try {
            const customer = new Customer(req.body)
            await customer.save()
            res.status(201).json({message: "Berhasil menyimpan customer"})
        } catch (error) {
            res.status(500).json({message: error})
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id
            await Customer.updateOne({_id: id}, {$set: req.body})
            res.status(200).json({message: "Success Update Customer"})
        } catch (error) {
            res.status(500).json({message: error})
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const check = await Customer.findById(id)
            if (!check) return res.status(401).json({message: "customer not available"})
            await Customer.deleteOne({_id: id})
            res.status(200).json({message: "Success delete customer"})
        } catch (error) {
            res.status(500).json({message: error})
        }
    },
}

export const LocationController = {
    readAll: async (req, res) => {
        try {
            const locations = await Location.find()
            res.status(200).json(locations)
        } catch (error) {
            res.status(500).json({message: error})
        }
    } ,
    readById: async (req, res) => {
        try {
            const id = req.params.id
            const location = await Location.findById(id)
            res.status(200).json(location)
        } catch (error) {
            res.status(500).json({message: error})
        }
    },
    save: async (req, res) => {
        try {
            const location = new Location(req.body)
            await location.save()
            res.status(201).json({message: "Berhasil menyimpan location"})
        } catch (error) {
            res.status(500).json({message: error})
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id
            await Location.updateOne({_id: id}, {$set: req.body})
            res.status(200).json({message: "Success Update Location"})
        } catch (error) {
            res.status(500).json({message: error})
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const check = await Location.findById(id)
            if (!check) return res.status(401).json({message: "Location not available"})
            await Location.deleteOne({_id: id})
            res.status(200).json({message: "Success delete Location"})
        } catch (error) {
            res.status(500).json({message: error})
        }
    },
}

export const TransactionController = {
    readAll: async (req, res) => {
        try {
            const transactions = await Transaction.find().populate('customer').populate('transaction_details')
            res.status(200).json(transactions)
        } catch (error) {
            res.status(500).json({message: error})
        }
    } ,
    readById: async (req, res) => {
        try {
            const id = req.params.id
            const transaction = await Transaction.findById(id).populate('customer').populate('transaction_details')
            res.status(200).json(transaction)
        } catch (error) {
            res.status(500).json({message: error})
        }
    },
    save: async (req, res) => {
        try {
            const transaction = new Transaction(req.body)
            await transaction.save()
            res.status(201).json({message: "Berhasil menyimpan Transaction"})
        } catch (error) {
            res.status(500).json({message: error})
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id
            await Transaction.updateOne({_id: id}, {$set: req.body})
            res.status(200).json({message: "Success Update Transaction"})
        } catch (error) {
            res.status(500).json({message: error})
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const check = await Transaction.findById(id)
            if (!check) return res.status(401).json({message: "Transaction not available"})
            await Transaction.deleteOne({_id: id})
            res.status(200).json({message: "Success delete Transaction"})
        } catch (error) {
            res.status(500).json({message: error})
        }
    },
}
