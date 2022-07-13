export interface AttributeType {
  basicType: string;
  id: number;
  identifier: boolean;
  name: string;
  label: string;
  validation: string;
}

export interface AttributeTypeDictionary {
  [key: string]: AttributeType;
}
