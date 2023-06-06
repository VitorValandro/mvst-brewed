import { TeaFacade } from '../infrastructure/tea.facade';

export const fetchTeaService = async () => {
  return await new TeaFacade().fetchAll();
};
