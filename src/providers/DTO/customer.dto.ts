export interface Customer {
  id: number;
  name: string;
  celphone: string;
}
export type required_params_type = {
  create: string[];
};
export const required_params = {
  create: ['name', 'celphone'],
};
