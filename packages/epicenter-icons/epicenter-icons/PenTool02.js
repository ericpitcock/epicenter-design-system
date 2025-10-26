import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 13.9971V21.9971M10.5 13.5C10.8665 13.8066 11.4027 14 12 14C12.5973 14 13.1335 13.8066 13.5 13.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5.25021 12.4495L7.5 7.5L7.09914 3.09054C7.0459 2.50492 7.507 2 8.09503 2H15.905C16.493 2 16.9541 2.50492 16.9009 3.09054L16.5 7.5L18.7498 12.4495C18.9036 12.788 18.857 13.1838 18.6288 13.4773L12 22L5.37122 13.4773C5.14298 13.1838 5.09637 12.788 5.25021 12.4495Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 7H16.5' })

export default defineComponent({
    name: 'PenTool02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
