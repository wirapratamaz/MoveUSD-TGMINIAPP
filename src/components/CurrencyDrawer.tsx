import React, { useState } from 'react'
import { Check } from './Icons'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from './ui/drawer'

interface CurrencyOption {
  code: string
  name: string
  flag: string
  selected?: boolean
}

interface CurrencyDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const CurrencyDrawer: React.FC<CurrencyDrawerProps> = ({ open, onOpenChange }) => {
  const [currencies, setCurrencies] = useState<CurrencyOption[]>([
    { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽', selected: false },
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸', selected: true },
  ])

  const selectCurrency = (code: string) => {
    setCurrencies(currencies.map(currency => ({
      ...currency,
      selected: currency.code === code
    })))
    // Close drawer after selection
    setTimeout(() => onOpenChange(false), 300)
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-zinc-700" />
        <DrawerHeader>
          <DrawerTitle>Display Currency</DrawerTitle>
          <DrawerDescription>Your preferred currency displayed in the app</DrawerDescription>
        </DrawerHeader>
        
        <div className="px-4 py-2 mb-2">
          <div className="bg-zinc-800 p-4 rounded-lg mb-5 text-sm">
            <p>Displayed USD values are a 1:1 USD-equivalent stablecoin, backed by USD in an FDIC Member bank account. <span className="text-blue-500">Learn more.</span></p>
          </div>
          
          <div className="space-y-4">
            {currencies.map(currency => (
              <div 
                key={currency.code}
                onClick={() => selectCurrency(currency.code)}
                className="flex items-center justify-between cursor-pointer py-2"
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{currency.flag}</span>
                  <div>
                    <div className="font-medium">{currency.name}</div>
                    <div className="text-sm text-gray-400">{currency.code}</div>
                  </div>
                </div>
                {currency.selected && (
                  <Check className="w-5 h-5 text-white" />
                )}
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default CurrencyDrawer 