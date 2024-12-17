export interface HeaderProps {
  header?: string
  customer?: boolean
}

export interface inputHeader {
  header?: string
  iconStyle?: React.CSSProperties
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  headerStyle?: React.CSSProperties
  inputTextStyle?: React.CSSProperties
  value?: string | undefined
  borderBottom?: React.CSSProperties
}
