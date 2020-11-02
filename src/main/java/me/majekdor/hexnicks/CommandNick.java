package me.majekdor.hexnicks;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.entity.Player;
import org.jetbrains.annotations.NotNull;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class CommandNick implements CommandExecutor {

    public static Map<UUID, String> nicks = new HashMap<>();

    @Override
    public boolean onCommand(@NotNull CommandSender sender, @NotNull Command cmd, @NotNull String label, @NotNull String[] args) {
        if (cmd.getName().equalsIgnoreCase("nick"))  {

            // Sender isn't a player
            if (!(sender instanceof Player)) {
                sender.sendMessage(HexNicks.format("&cSorry console, no nickname for you."));
                return true;
            }

            Player p = (Player) sender; FileConfiguration c = HexNicks.instance.getConfig();
            int max = c.getInt("max-length");
            int min = c.getInt("min-length");

            if (c.getBoolean("use-permissions")) {
                if (!p.hasPermission("hexnicks.use")) {
                    p.sendMessage(HexNicks.format("&cYou don't have permission to change your nickname!"));
                    return true;
                }
            }

            if (args.length >= 1) {
                String nick, noColor;
                if (args[0].equalsIgnoreCase("help")) {
                    p.sendMessage(HexNicks.format("&7----------&cNickname &6Help&7----------"));
                    p.sendMessage(HexNicks.format("&cUsage: &7/nick <nickname>"));
                    p.sendMessage(HexNicks.format("&7You may use hex and standard color codes."));
                    p.sendMessage(HexNicks.format("&7Use &c/nonick &7to remove your nickname."));
                    p.sendMessage(HexNicks.format("&7Use &c/nickcolor &7to just change the color."));
                    p.sendMessage(HexNicks.format("&7Max nickname length not including colors is: &c" + max));
                    return true;
                }
                // This section looks dumb as shit but trust me it works
                if (args.length > 1) {
                    char[] chars = Arrays.toString(args).toCharArray();
                    StringBuilder sb = new StringBuilder();
                    int helpful = 0;
                    for (char aChar : chars) {
                        if (helpful < 2) {
                            if (aChar == '\"') {
                                helpful++;
                                continue;
                            }
                            if (helpful == 1) {
                                sb.append(aChar);
                            }
                        }
                    }
                    if (helpful != 2) {
                        p.sendMessage(HexNicks.format("&cIt seems as if you have tried to add a space in your nickname."));
                        p.sendMessage(HexNicks.format("&cTo do this, use /nick \"part1 part2\" with quotations."));
                        return true;
                    } else {
                        nick = sb.toString().replaceAll(",", "");
                    }
                } else {
                    nick = args[0];
                }
                noColor = HexNicks.removeColorCodes(nick);
                if (noColor.length() > max) {
                    p.sendMessage(HexNicks.format("&cThis nickname is too long!")); return true;
                }
                if (noColor.length() < min) {
                    p.sendMessage(HexNicks.format("&cThis nickname is too short!")); return true;
                }
                
                p.setDisplayName(HexNicks.format(nick + "&r"));

                if (c.getBoolean("tab-nicknames")) {
                    p.setPlayerListName(HexNicks.format(nick));
                }
                if (nicks.containsKey(p.getUniqueId())) {
                    nicks.replace(p.getUniqueId(), nick);
                } else {
                    nicks.put(p.getUniqueId(), nick);
                }
                // SQL shit
                if (HexNicks.instance.SQL.isConnected()) {
                    HexNicks.instance.data.addNickname(p.getUniqueId(), nick);
                }
                p.sendMessage(HexNicks.format("&7Your nickname is now: " + nick));
            } else {
                p.sendMessage(HexNicks.format("&cUsage: /nick <nickname> | Use /nick help for more"));
            }
        }
        if (cmd.getName().equalsIgnoreCase("nonick")) {
            // Sender isn't a player
            if (!(sender instanceof Player)) {
                sender.sendMessage(HexNicks.format("&cConsole is unable to run this command."));
                return true;
            }
            Player p = (Player) sender; FileConfiguration c = HexNicks.instance.getConfig();
            if (c.getBoolean("use-permissions")) {
                if (!p.hasPermission("hexnicks.use")) {
                    p.sendMessage(HexNicks.format("&cYou don't have permission to change your nickname!"));
                    return true;
                }
            }
            if (args.length == 0) {
                p.setDisplayName(p.getName());
                if (c.getBoolean("tab-nicknames")) {
                    p.setPlayerListName(HexNicks.format(p.getName()));
                }
                if (nicks.containsKey(p.getUniqueId())) {
                    nicks.replace(p.getUniqueId(), p.getName());
                } else {
                    nicks.put(p.getUniqueId(), p.getName());
                }
                // SQL shit
                if (HexNicks.instance.SQL.isConnected()) {
                    HexNicks.instance.data.removeNickname(p.getUniqueId());
                }
                p.sendMessage(HexNicks.format("&7Nickname removed."));
            } else {
                p.sendMessage(HexNicks.format("&cUsage: /nick <nickname> | Use /nick help for more"));
            }
        }
        if (cmd.getName().equalsIgnoreCase("nickcolor")) {
            // Sender isn't a player
            if (!(sender instanceof Player)) {
                sender.sendMessage(HexNicks.format("&cConsole is unable to run this command."));
                return true;
            }
            Player p = (Player) sender; FileConfiguration c = HexNicks.instance.getConfig();
            if (c.getBoolean("use-permissions")) {
                if (!p.hasPermission("hexnicks.changecolor")) {
                    p.sendMessage(HexNicks.format("&cYou don't have permission to change your nickname's color!"));
                    return true;
                }
            }
            if (args.length == 0) {
                p.sendMessage(HexNicks.format("&cPlease specify a color for the nickname!"));
                return true;
            }
            if (args.length == 1) {
                String nickname;
                if (HexNicks.removeColorCodes(args[0]).equals("")) {
                    nickname = args[0] + p.getName();
                } else if (HexNicks.removeColorCodes(args[0]).equalsIgnoreCase(p.getName())) {
                    nickname = args[0];
                } else {
                    p.sendMessage(HexNicks.format("&cYou may only use color codes and your name with this command!"));
                    return true;
                }
                p.setDisplayName(HexNicks.format(nickname + "&r"));
                if (c.getBoolean("tab-nicknames")) {
                    p.setPlayerListName(HexNicks.format(nickname));
                }
                if (nicks.containsKey(p.getUniqueId())) {
                    nicks.replace(p.getUniqueId(), nickname);
                } else {
                    nicks.put(p.getUniqueId(), nickname);
                }

                // SQL shit
                if (HexNicks.instance.SQL.isConnected()) {
                    HexNicks.instance.data.addNickname(p.getUniqueId(), nickname);
                }

                p.sendMessage(HexNicks.format("&7Your nickname is now: &f" + nickname));
            } else {
                p.sendMessage(HexNicks.format("&cUsage: /nick <nickname> | Use /nick help for more"));
            }
        }
        return false;
    }
}
