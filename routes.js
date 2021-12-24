import express from "express"
import { CustomerController, LocationController, ReportController, TransactionController } from "./controllers.js"

const routes = express.Router()

routes.get('/customers/', CustomerController.readAll)
routes.post('/customers/', CustomerController.save)
routes.delete('/customers/:id', CustomerController.delete)
routes.get('/customers/:id', CustomerController.readById)
routes.patch('/customers/:id', CustomerController.update)

routes.get('/location/', LocationController.readAll)
routes.post('/location/', LocationController.save)
routes.delete('/location/:id', LocationController.delete)
routes.get('/location/:id', LocationController.readById)
routes.patch('/location/:id', LocationController.update)

routes.get('/transaction/', TransactionController.readAll)
routes.post('/transaction/', TransactionController.save)
routes.delete('/transaction/:id', TransactionController.delete)
routes.get('/transaction/:id', TransactionController.readById)
routes.patch('/transaction/:id', TransactionController.update)

routes.get('/report/daily/', ReportController.daily)
routes.get('/report/weekly/', ReportController.weekly)
routes.get('/report/monthly/', ReportController.monthly)
routes.get('/report/yearly/', ReportController.yearly)

export default routes