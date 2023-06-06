import { TeaProps } from "../domain/tea";
import { TeaFacade } from "../infrastructure/tea.facade";

export const fetchTeaService = async (): Promise<TeaProps[]> => {
  return await new TeaFacade().fetchAll();
};
