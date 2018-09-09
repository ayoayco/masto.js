

# Hierarchy

**Status**

# Properties

<a id="account"></a>

##  account

**● account**: *[Account](_entities_account_.account.md)*

*Defined in [entities/Status.ts:21](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L21)*

The Account which posted the status

___
<a id="application"></a>

## `<Optional>` application

**● application**: *[Application](_entities_application_.application.md)*

*Defined in [entities/Status.ts:78](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L78)*

Application from which the status was posted

___
<a id="content"></a>

##  content

**● content**: *`string`*

*Defined in [entities/Status.ts:33](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L33)*

Body of the status; this will contain HTML (remote HTML already sanitized)

___
<a id="created_at"></a>

##  created_at

**● created_at**: *`string`*

*Defined in [entities/Status.ts:36](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L36)*

The time the status was created

___
<a id="emojis"></a>

##  emojis

**● emojis**: *[Emoji](_entities_emoji_.emoji.md)[]*

*Defined in [entities/Status.ts:39](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L39)*

An array of Emoji

___
<a id="favourited"></a>

## `<Optional>` favourited

**● favourited**: * `undefined` &#124; `false` &#124; `true`
*

*Defined in [entities/Status.ts:54](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L54)*

Whether the authenticated user has favourited the status

___
<a id="favourites_count"></a>

##  favourites_count

**● favourites_count**: *`number`*

*Defined in [entities/Status.ts:48](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L48)*

The number of favourites for the status

___
<a id="id"></a>

##  id

**● id**: *`string`*

*Defined in [entities/Status.ts:12](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L12)*

The ID of the status

___
<a id="in_reply_to_account_id"></a>

## `<Optional>` in_reply_to_account_id

**● in_reply_to_account_id**: * `null` &#124; `string`
*

*Defined in [entities/Status.ts:27](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L27)*

`null` or the ID of the account it replies to

___
<a id="in_reply_to_id"></a>

## `<Optional>` in_reply_to_id

**● in_reply_to_id**: * `null` &#124; `string`
*

*Defined in [entities/Status.ts:24](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L24)*

`null` or the ID of the status it replies to

___
<a id="language"></a>

## `<Optional>` language

**● language**: * `undefined` &#124; `string`
*

*Defined in [entities/Status.ts:81](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L81)*

The detected language for the status, if detected

___
<a id="media_attachments"></a>

##  media_attachments

**● media_attachments**: *[Attachment](_entities_attachment_.attachment.md)[]*

*Defined in [entities/Status.ts:69](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L69)*

An array of Attachments

___
<a id="mentions"></a>

##  mentions

**● mentions**: *[Mention](_entities_mention_.mention.md)[]*

*Defined in [entities/Status.ts:72](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L72)*

An array of Mentions

___
<a id="muted"></a>

## `<Optional>` muted

**● muted**: * `undefined` &#124; `false` &#124; `true`
*

*Defined in [entities/Status.ts:57](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L57)*

Whether the authenticated user has muted the conversation this status from

___
<a id="pinned"></a>

## `<Optional>` pinned

**● pinned**: * `undefined` &#124; `false` &#124; `true`
*

*Defined in [entities/Status.ts:84](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L84)*

Whether this is the pinned status for the account that posted it

___
<a id="reblog"></a>

## `<Optional>` reblog

**● reblog**: * `null` &#124; [Status](_entities_status_.status.md)
*

*Defined in [entities/Status.ts:30](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L30)*

`null` or the reblogged Status

___
<a id="reblogged"></a>

## `<Optional>` reblogged

**● reblogged**: * `undefined` &#124; `false` &#124; `true`
*

*Defined in [entities/Status.ts:51](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L51)*

Whether the authenticated user has reblogged the status

___
<a id="reblogs_count"></a>

##  reblogs_count

**● reblogs_count**: *`number`*

*Defined in [entities/Status.ts:45](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L45)*

The number of reblogs for the status

___
<a id="replies_count"></a>

##  replies_count

**● replies_count**: *`number`*

*Defined in [entities/Status.ts:42](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L42)*

The number of replies for the status

___
<a id="sensitive"></a>

##  sensitive

**● sensitive**: *`boolean`*

*Defined in [entities/Status.ts:60](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L60)*

Whether media attachments should be hidden by default

___
<a id="spoiler_text"></a>

##  spoiler_text

**● spoiler_text**: *`string`*

*Defined in [entities/Status.ts:63](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L63)*

If not empty, warning text that should be displayed before the actual content

___
<a id="tags"></a>

##  tags

**● tags**: *[Tag](_entities_tag_.tag.md)[]*

*Defined in [entities/Status.ts:75](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L75)*

An array of Tags

___
<a id="uri"></a>

##  uri

**● uri**: *`string`*

*Defined in [entities/Status.ts:15](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L15)*

A Fediverse-unique resource ID

___
<a id="url"></a>

## `<Optional>` url

**● url**: * `undefined` &#124; `string`
*

*Defined in [entities/Status.ts:18](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L18)*

URL to the status page (can be remote)

___
<a id="visibility"></a>

##  visibility

**● visibility**: *[StatusVisibility](../modules/_entities_status_.md#statusvisibility)*

*Defined in [entities/Status.ts:66](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Status.ts#L66)*

One of: `public`, `unlisted`, `private`, `direct`

___
