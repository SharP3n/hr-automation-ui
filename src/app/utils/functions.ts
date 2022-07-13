import { throwError } from 'rxjs';
import { NotificationService } from '@services/notification.service';
import { ERROR_STATUS_CODES } from '@constants/errorStatusCode';
import { ENotificationMode } from '@constants/notification';
import { ERROR_MESSAGE } from '@constants/strings';
import { CandidateAttribute } from '@src/app/models/candidates';

export const defaultErrorhandler = (
  notification: NotificationService,
  error: { status: number }
) => {
  notification.show(
    ERROR_MESSAGE[error?.status || ERROR_STATUS_CODES.INTERNAL_SERVER_ERROR],
    ENotificationMode.ERROR
  );
  return throwError('error');
};

export const getFullName = (candidateAttributes: CandidateAttribute[]): string => {
  const firstName = candidateAttributes.find((attr) => attr.attributeTypes.name === 'firstname');
  const lastName = candidateAttributes.find((attr) => attr.attributeTypes.name === 'lastname');
  return firstName?.value.length && lastName?.value.length
    ? `${firstName.value} ${lastName.value}`
    : 'No name';
};
