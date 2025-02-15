import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/table';
import { Star } from 'lucide-react';
import LenguajeDevolvedor from '../data/DevolvedorDatosIdioma';
interface Tabla {
  prop: string;
  type: string;
  desc: string;
  predef:string;
}
const PropsTable = () => {
  const DataTablaRaw = LenguajeDevolvedor(undefined, "table");
  // Si languagesRaw es un string (JSON), lo parseamos; de lo contrario, lo usamos directamente.
  const propsData: Tabla[] =
    typeof DataTablaRaw === "string" ? JSON.parse(DataTablaRaw) : DataTablaRaw
  return (
    <motion.div 
     id="props"
      className="flex justify-center" 
      initial={{ y: 20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ delay: 0.8 }}
    >
      <Card className="mb-8 w-full max-w-2xl bg-gray-800 text-gray-100 mx-auto">
        <CardHeader>
          <CardTitle>
            <Star className="inline-block mr-2" />
     {LenguajeDevolvedor(23)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">

          {LenguajeDevolvedor(24)}
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-300">  {LenguajeDevolvedor(25)}</TableHead>
                <TableHead className="text-gray-300">  {LenguajeDevolvedor(26)}</TableHead>
                <TableHead className="text-gray-300">  {LenguajeDevolvedor(27)}</TableHead>
                <TableHead className="text-gray-300">  {LenguajeDevolvedor(28)} </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {propsData.map((row, index) => (
                <TableRow 
                  key={index} 
                  className="border-b border-gray-700 group"
                >
                  <TableCell className="bg-black font-medium text-gray-300 group-hover:border group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all duration-300">
                    {row.prop}
                  </TableCell>
                  <TableCell className="bg-black text-gray-400 group-hover:border group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all duration-300">
                    {row.type}
                  </TableCell>
                  <TableCell className="bg-black text-gray-400 group-hover:border group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all duration-300">
                    {row.desc}
                  </TableCell>
                  <TableCell className="bg-black text-gray-400 group-hover:border group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all duration-300">
                    {row.predef}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PropsTable;
