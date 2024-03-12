import inquirer from 'inquirer';

export default async function (question: string): Promise<string | undefined> {
  try {
    const { [question]: response } = await inquirer.prompt([
      { name: question },
    ]);
    console.log('Terminal_Asker successfully received a response:');
    console.log(response);
    return response;
  } catch (error) {
    console.error('Terminal_Asker encountered an error:');
    console.error(error);
  }
}
