export interface ServiceCardType {
  title: string;
  desc: string;
  icon: string;
  link: string;
}

export interface ServiceCardArrayType extends Array<ServiceCardType> {}
