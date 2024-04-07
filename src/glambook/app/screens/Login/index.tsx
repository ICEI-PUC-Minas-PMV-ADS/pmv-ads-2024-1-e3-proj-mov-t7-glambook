import { View, Text, Image } from 'react-native';
import { Button, Input } from 'tamagui';

export default function Login() {
  const GlambookImage = require('../../../assets/images/glambook.png');
  return (
    <View className="flex-1 items-center justify-center p-8">
      <Image source={GlambookImage} className="w-1/3 h-1/3" />
      <Text className="my-1 -mt-6 font-medium text-xl text-[#0C3B2E]"> Login </Text>
      <View className="w-full my-6">
        <Input placeholder="Digite seu e-mail" className="w-full my-4 border-2 text-sm" />
        <Input
          placeholder="Digite sua senha"
          className="w-full my-4 border-2 text-sm"
          secureTextEntry={true}
        />
        <Button className="my-8 w-2/3 mx-auto bg-[#6D9773]">
          <Text className="text-base text-white">Entrar</Text>
        </Button>
      </View>
    </View>
  );
}
