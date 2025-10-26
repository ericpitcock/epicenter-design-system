import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M11.3598 2.53349L9 4.5L5.5 4.5C4.94772 4.5 4.5 4.94772 4.5 5.5L4.5 9L2.53349 11.3598C2.22445 11.7307 2.22445 12.2693 2.53349 12.6402L4.5 15L4.5 18.5C4.5 19.0523 4.94772 19.5 5.5 19.5L9 19.5L11.3598 21.4665C11.7307 21.7756 12.2693 21.7756 12.6402 21.4665L15 19.5H18.5C19.0523 19.5 19.5 19.0523 19.5 18.5L19.5 15L21.4665 12.6402C21.7756 12.2693 21.7756 11.7307 21.4665 11.3598L19.5 9L19.5 5.5C19.5 4.94772 19.0523 4.5 18.5 4.5L15 4.5L12.6402 2.53349C12.2693 2.22445 11.7307 2.22445 11.3598 2.53349Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 13L11 15L15.5 9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CheckmarkBadge02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
