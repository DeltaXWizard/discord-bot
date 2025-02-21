/* eslint-disable jsdoc/require-param */
import { MessageEmbed } from "discord.js";

import { emoteList } from "../../../../config/commands/emoteList";
import { CommandHandler } from "../../../../interfaces/commands/CommandHandler";
import { beccaErrorHandler } from "../../../../utils/beccaErrorHandler";
import { errorEmbedGenerator } from "../../../commands/errorEmbedGenerator";

/**
 * Using the artList config, selects a random art object and parses it
 * into an embed. The actual images are fetched from Becca's profile site.
 */
export const handleEmote: CommandHandler = async (Becca, interaction) => {
  try {
    const random = Math.floor(Math.random() * emoteList.length);
    const { emoteName, description, fileName } = emoteList[random];

    const emoteEmbed = new MessageEmbed();
    emoteEmbed.setTitle(`Becca is ${emoteName}`);
    emoteEmbed.setColor(Becca.colours.default);
    emoteEmbed.setDescription(description);
    emoteEmbed.setImage(`https://www.beccalyria.com/assets/emotes/${fileName}`);
    emoteEmbed.setFooter("Art by Starfazers: https://starfazers.art");

    await interaction.editReply({ embeds: [emoteEmbed] });
  } catch (err) {
    const errorId = await beccaErrorHandler(
      Becca,
      "emote command",
      err,
      interaction.guild?.name
    );
    await interaction
      .reply({
        embeds: [errorEmbedGenerator(Becca, "emote", errorId)],
        ephemeral: true,
      })
      .catch(async () => {
        await interaction.editReply({
          embeds: [errorEmbedGenerator(Becca, "emote", errorId)],
        });
      });
  }
};
