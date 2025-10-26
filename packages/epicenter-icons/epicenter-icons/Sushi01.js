import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 11.5C7.74985 11.5 4.48919 12.7799 2 14C2 9 4.42337 4 12.0388 4C19.6541 4 22 9 22 14C19.5399 12.783 16.2439 11.5 12 11.5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 13.5V16.7639C4 17.5215 4.42707 18.2131 5.12971 18.4962C6.59941 19.0886 9.2997 20 12 20C14.7003 20 17.4006 19.0886 18.8703 18.4962C19.5729 18.2131 20 17.5215 20 16.7639V13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7 12C7 9.47222 7.88671 4.56415 13 4' })
const _hoisted4 = h('path', { 'd': 'M15.0039 12C15.0039 10.0614 15.5157 6.73584 18.0039 5' })

export default defineComponent({
    name: 'Sushi01',
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
