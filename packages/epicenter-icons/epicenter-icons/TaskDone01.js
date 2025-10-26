import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M19 14.9981L19 5.5C19 4.39543 18.1046 3.5 17 3.5H15M12 21.9981L5 21.9981C3.89543 21.9981 3 21.1027 3 19.9981V5.5C3 4.39543 3.89543 3.5 5 3.5L7 3.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M13.5 2H8.5C7.67157 2 7 2.67157 7 3.5C7 4.32843 7.67157 5 8.5 5H13.5C14.3284 5 15 4.32843 15 3.5C15 2.67157 14.3284 2 13.5 2Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 15H10.4286M7 11H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M21 17L16 22L14 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TaskDone01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
