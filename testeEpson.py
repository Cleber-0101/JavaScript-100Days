from escpos.printer import Usb

# Valores para a Epson TM-T20
VENDOR_ID = 0x04b8  # Vendor ID da Epson
PRODUCT_ID = 0x0e15  # Product ID comum para modelos TM-T20/T20II

try:
    # Conecta à impressora USB
    printer = Usb(VENDOR_ID, PRODUCT_ID, 0)  # Adicionado interface number (geralmente 0)
    
    # Configurações adicionais para melhor compatibilidade
    printer.profile.profile_data['mediaWidth'] = 58  # Largura da mídia em mm (para papel 58mm)
    
    # Imprime a nota de teste
    printer.set(align='center', text_type='B')
    printer.text("========= NOTA DE TESTE =========\n")
    printer.set(align='center')
    printer.text("Teste deu certo, Cleber!\n")
    printer.text("--------------------------------\n")
    printer.set(align='left')
    printer.text("Produto: Impressão Teste\n")
    printer.text("Quantidade: 1\n")
    printer.text("Preço: R$ 0,00\n")
    printer.text("--------------------------------\n")
    printer.set(align='center')
    printer.text("Obrigado!\n")
    printer.cut()  # Corta a nota
    print("Impressão enviada com sucesso!")

except Exception as e:
    print(f"Erro ao imprimir: {e}")