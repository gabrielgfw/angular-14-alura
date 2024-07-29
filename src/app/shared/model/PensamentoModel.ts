import { EModeloPensamento } from "../enum/EModeloPensamento";

export interface PensamentoModel {
  id?: number;
  conteudo: string;
  autoria: string;
  modelo?: EModeloPensamento | string;
}
