import { Component } from "@angular/core";
import { AngularComponentFactory } from "../component-factory";
import { QuestionAngular } from "../question";
import { QuestionCommentModel } from "survey-core";

@Component({
  templateUrl: "./comment.component.html",
  selector: "sv-ng-question-comment"
})

export class CommentQuestionComponent extends QuestionAngular<QuestionCommentModel> {}
AngularComponentFactory.Instance.registerComponent("comment-question", CommentQuestionComponent);