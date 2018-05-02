import {Injectable} from '@angular/core';
import {MagicEngine} from './magic.engine';
import {GuiCommand} from '@magic-xpa/gui';
import {List} from '@magic-xpa/mscorelib';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class CommandsCollector {
  private taskIds: List<string> = new List<string>();
  private commands: List<GuiCommand> = new List<GuiCommand>();
  private subscription: Subscription = null;

  constructor(protected magic: MagicEngine) {
  }

  startCollecting(taskId: string) {
    this.taskIds.push(taskId);

    if (this.subscription === null) {
      this.subscription = this.magic.refreshDom
        .filter(command => this.taskIds.Contains(command.TaskTag))
        .subscribe(command => {
          this.commands.push(command);
        });
    }
  }

  stopCollecting(taskId: string) {
    this.taskIds.Remove(taskId);

    const commands: GuiCommand[] = this.GetCommands(taskId);
    commands.forEach(command => { this.commands.Remove(command); });

    if (this.taskIds.length === 0) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  GetCommands(taskId: string): GuiCommand[] {
    return this.commands.filter( (command: GuiCommand) => command.TaskTag === taskId);
  }
}
