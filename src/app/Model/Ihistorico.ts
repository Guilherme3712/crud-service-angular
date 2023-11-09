import { ICadastroTrem } from "./Icadastro-trem";
export interface IHistorico extends ICadastroTrem{
  tipo: "NOVO" | "EDITAR" | "EXCLUIR";
}